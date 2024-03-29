import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useToConfirmCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getToConfirmEndorsement(filter) {
      return frontendGetIMs({
        collegeId: user.ActiveFaculty.Faculty.department.collegeId,
        status: "DEPARTMENT_REVISED",
        coordinatorEndorsed: true,
        deanEndorsed: false,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getToConfirmEndorsement(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
