import React from 'react';
import { Loader2 } from 'lucide-react';

interface BlogPaginationProps {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  hasMore,
  loading,
  onLoadMore
}) => {
  if (!hasMore && !loading) return null;

  return (
    <div className="flex justify-center py-8">
      {hasMore && (
        <button
          onClick={onLoadMore}
          disabled={loading}
          className="px-6 py-3 bg-[#12233d] text-white rounded-2xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:bg-[#1a2f4a] transition-colors"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading...
            </>
          ) : (
            'Load More Posts'
          )}
        </button>
      )}
    </div>
  );
};