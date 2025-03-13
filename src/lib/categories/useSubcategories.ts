import fetchSubCategories from "@lib/api/categories/fetchSubCategories";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type UseSubcategoriesQueryProps = {
  id: string;
};

const useSubcategoriesQuery = ({ id }: UseSubcategoriesQueryProps) => {
  const [queryEnabled, setQueryEnabled] = useState(false);

  const { data: { subCategories } = {} } = useQuery({
    queryKey: [`subcategories-${id}`],
    queryFn: fetchSubCategories(id),
    enabled: queryEnabled,
    staleTime: Infinity,
  });

  return { setQueryEnabled, subCategories };
};

export default useSubcategoriesQuery;
