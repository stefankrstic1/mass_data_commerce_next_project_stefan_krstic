import { useMediaQuery, useTheme } from "@mui/material";

const useSlideCount = () => {
  const theme = useTheme();
  const isMDSize = useMediaQuery(theme.breakpoints.down("md"));
  const isSMSize = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSMSize) return 1;

  if (isMDSize) return 2;

  return 3;
};

export default useSlideCount;
