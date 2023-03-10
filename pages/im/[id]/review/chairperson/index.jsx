import ChairpersonQuestion from "@/components/review/ChairpersonQuestion";
import IMInfo from "@/components/review/IMInfo";
import Instructions from "@/components/review/Instructions";
import ConfirmChairpersonReview from "@/components/review/preview/ConfirmChairpersonReview";
import ReviewPage from "@/components/review/ReviewPage";
import { sections } from "@/constants/questions";
import useUser from "@/hooks/useUser";
import frontendCreateChairpersonReview from "@/services/frontend/chairperson_review/frontendCreateChairpersonReview";
import frontendReadChairpersonReviews from "@/services/frontend/chairperson_review/frontendReadChairpersonReview";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import frontendCreateSubmittedChairpersonReview from "@/services/frontend/submitted_chairperson_review/frontendCreateSubmittedChairpersonReview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChairpersonReviewPage = () => {
  const { user, userLoading, userError } = useUser();
  const router = useRouter();
  const [iM, setIM] = useState();
  const [chairpersonReview, setChairpersonReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo
      key='info'
      authors=''
      title=''
      type='MODULE'
      onNext={handleNext}
      loading={!chairpersonReview}
    />
  );
  const steps = [
    iMInfo,
    <Instructions
      key='instruction'
      onNext={handleNext}
      onPrevious={handlePrevious}
    />,
    ...generateQuestions(sections),
    <ConfirmChairpersonReview
      key='confirm'
      chairpersonReviewId={chairpersonReview?.id}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
    />,
  ];

  function handlePrevious() {
    return setStep((prev) => prev - 1);
  }

  function handleNext() {
    return setStep((prev) => prev + 1);
  }

  async function handleSubmit() {
    return frontendCreateSubmittedChairpersonReview({
      chairpersonReviewId: chairpersonReview.id,
    })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        router.push(`/im/${iM.id}`);
      });
  }

  function generateQuestions(sections) {
    const questions = [];
    for (let section of sections) {
      for (let question of section.questions) {
        questions.push(
          <ChairpersonQuestion
            key={question.id}
            questionId={question.id}
            chairpersonReview={chairpersonReview}
            title={section.title}
            question={question.label}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        );
      }
    }

    return questions;
  }

  useEffect(() => {
    let subscribe = true;
    const id = router?.query?.id;
    if (!id) return;

    frontendReadIM(id).then((res) => {
      if (!subscribe) return;

      setIM(res);
    });

    return () => {
      subscribe = false;
    };
  }, [router?.query?.id]);

  useEffect(() => {
    console.log({ iM });
    if (!iM) return;

    setIMInfo(
      <IMInfo
        loading={!chairpersonReview}
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM, chairpersonReview]);

  useEffect(() => {
    console.log({ user });
    if (!iM?.id || !user?.ActiveFaculty) return;
    let subscribe = true;

    frontendCreateChairpersonReview({
      iMId: iM.id,
    })
      .then((res) => {
        if (!subscribe) return;

        setChairpersonReview(res);
      })
      .catch((err) => {
        frontendReadChairpersonReviews({
          iMId: iM.id,
          chairpersonId: user.ActiveFaculty.ActiveChairperson.chairpersonId,
        }).then((res) => {
          if (!subscribe) return;

          setChairpersonReview(res.data[0]);
        });
      });

    return () => {
      subscribe = false;
    };
  }, [iM, user]);

  useEffect(() => {
    console.log({ chairpersonReview });
  }, [chairpersonReview]);

  return <ReviewPage reviewingAs='Chairperson' step={step} steps={steps} />;
};
export default ChairpersonReviewPage;
