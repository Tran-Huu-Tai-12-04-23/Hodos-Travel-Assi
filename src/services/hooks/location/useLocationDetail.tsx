import { useQuery } from "@tanstack/react-query";

import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";

export type Variables = {
  id: string;
};

export interface IDetailLocation {
  address: string;
  coordinates: string;
  createdAt: string;
  createdBy: any;
  createdByName: any;
  deleteBy: any;
  description: string;
  id: string;
  isDeleted: boolean;
  label: string;
  lstImgs: string[];
  name: string;
  updatedAt: string;
  updatedBy: any;
}

type Response = {
  data: IDetailLocation;
};

const useLocationDetail = (id: string) => {
  const { data, isLoading, error } = useQuery<Response, Error>({
    queryKey: [endpoints.LOCATION + "/" + id],
    queryFn: () =>
      rootApi.get<Variables, Response>(endpoints.LOCATION + "/" + id, {}),
  });

  return {
    data: data?.data ?? null,
    isLoading: isLoading,
    error,
  };
};

export default useLocationDetail;
