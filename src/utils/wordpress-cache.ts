// class WordPressCache {
//   private cache = new Map<string, { data: any; timestamp: number }>();
//   private readonly TTL = 5 * 60 * 1000; // 5 minutes

//   set(key: string, data: any): void {
//     this.cache.set(key, {
//       data,
//       timestamp: Date.now()
//     });
//   }

//   get(key: string): any | null {
//     const item = this.cache.get(key);
//     if (!item) return null;

//     const isExpired = Date.now() - item.timestamp > this.TTL;
//     if (isExpired) {
//       this.cache.delete(key);
//       return null;
//     }

//     return item.data;
//   }

//   clear(): void {
//     this.cache.clear();
//   }
// }

// export const wordpressCache = new WordPressCache();


interface CacheItem<T> {
  data: T;
  timestamp: number;
}

class WordPressCache {
  private cache = new Map<string, CacheItem<unknown>>();
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const isExpired = Date.now() - item.timestamp > this.TTL;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data as T;
  }

  clear(): void {
    this.cache.clear();
  }

  // Additional utility methods for better cache management
  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    const isExpired = Date.now() - item.timestamp > this.TTL;
    if (isExpired) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  size(): number {
    // Clean up expired items before returning size
    this.cleanupExpired();
    return this.cache.size;
  }

  keys(): string[] {
    this.cleanupExpired();
    return Array.from(this.cache.keys());
  }

  // Clean up expired cache items
  private cleanupExpired(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.TTL) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats(): { size: number; ttl: number; expired: number } {
    const now = Date.now();
    let expired = 0;
    
    for (const item of this.cache.values()) {
      if (now - item.timestamp > this.TTL) {
        expired++;
      }
    }

    return {
      size: this.cache.size,
      ttl: this.TTL,
      expired
    };
  }
}

export const wordpressCache = new WordPressCache();