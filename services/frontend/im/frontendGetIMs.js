import axios from "axios";

export default async function frontendGetIMs({
  limit,
  page,
  ownerId,
  status,
  serialNumber,
  title,
  notOwnerId,
  departmentId,
  reviewerId,
  sortColumn,
  sortOrder,
  coordinatorEndorsed,
  deanEndorsed,
  collegeId,
  endorsedByDean,
  endorsedByCoordinator,
  authors,
  type,
  owner,
  collegeName,
  departmentName,
  iMDCoordinatorReviewerId,
  toRevise,
  iMDCoordinatorEndorsed,
  endorsedByIMDCoordinator,
  endorsedByCITLDirector,
}) {
  try {
    const response = await axios.get("/api/im", {
      params: {
        departmentName,
        collegeName,
        limit,
        page,
        ownerId,
        status,
        serialNumber,
        title,
        notOwnerId,
        departmentId,
        reviewerId,
        sortColumn,
        sortOrder,
        coordinatorEndorsed,
        deanEndorsed,
        collegeId,
        endorsedByDean,
        endorsedByCoordinator,
        authors,
        type,
        owner,
        iMDCoordinatorReviewerId,
        toRevise,
        iMDCoordinatorEndorsed,
        endorsedByIMDCoordinator,
        endorsedByCITLDirector,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
    return { data: [], total: 0 };
  }
}
