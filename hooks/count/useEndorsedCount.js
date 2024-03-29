import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useEndorsedCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (
      !user ||
      !user?.ActiveFaculty ||
      !user?.ActiveFaculty?.ActiveCoordinator
    )
      return;
    let subscribe = true;

    async function getEndorsed(filter) {
      return frontendGetIMs({
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        coordinatorEndorsed: true,
        endorsedByCoordinator:
          user.ActiveFaculty.ActiveCoordinator.coordinatorId,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getEndorsed(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
