import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";
import { ILocation } from "./dto";

type Variables = {
  where?: any;
  skip: number;
  take: number;
};

type Response = [ILocation[], number];
const useLocationPagination = (where: any) => {
  const [variables] = useState({
    skip: 0,
    take: 0,
  });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetching,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: [endpoints.LOCATION_PAGINATION],
    queryFn: ({}) => {
      return rootApi.post<Variables, Response>(endpoints.LOCATION_PAGINATION, {
        ...variables,
        where,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const totalCount = lastPage[1] || 0;
      const nextPage = pages.length * variables.take;
      return nextPage < totalCount ? nextPage : undefined;
    },
  });

  return {
    isLoading: isPending,
    data:
      data?.pages.flatMap((page: any) => {
        return page.data[0];
      }) || [],
    error,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
  };
};

export default useLocationPagination;
