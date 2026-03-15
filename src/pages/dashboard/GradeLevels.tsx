import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiOutlinePlus } from "react-icons/hi";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import EmptySet from "../../components/ui/EmptySet";
import CreateGradeLevel from "../../components/modals/grade-levels-page/CreateGradeLevel";
import GradeLevelAssign from "../../components/modals/grade-levels-page/GradeLevelAssign";
import GradeLevelCard from "../../components/ui/GradeLevelCard";
import type {
  GradeLevel,
  GradeLevelForm,
  GradeLevelsModals,
} from "../../types";
import { useAppContext } from "../../context";
import { toast } from "sonner";
import DeleteConfirmation from "../../components/modals/grade-levels-page/DeleteConfirmation";

export default function GradeLevels() {
  const { gradeLevels, setGradeLevels, employees, setEmployees } =
    useAppContext();
  const [modals, setModals] = useState<GradeLevelsModals>({
    assignEmployee: false,
    createGradeLevel: false,
    deleteGradeLevel: false,
  });
  const [gradeLevelForm, setGradeLevelForm] = useState<GradeLevelForm>({
    name: "",
    description: "",
  });
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>();
  const [selEmployeeId, setSelEmployeeId] = useState<string>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setGradeLevelForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //assign id and date
    const gradeId = uuidv4();
    const whenCreated = new Date().toISOString();

    const newGradeLevel: GradeLevel = {
      id: gradeId,
      name: gradeLevelForm.name,
      description: gradeLevelForm.description,
      createdAt: whenCreated,
    };

    //add
    setGradeLevels((prevState) => {
      return [...prevState, newGradeLevel];
    });

    //notify
    toast.success("You've successfully created a new grade level.");

    //close
    setModals((prevState) => {
      return {
        ...prevState,
        createGradeLevel: false,
      };
    });

    //reset
    setGradeLevelForm({
      name: "",
      description: "",
    });
  };

  // const selectItemToDelete = (e: GradeLevel) => {
  //   //setgradelevl
  //   setGradeLevel(e);

  //   //showmodal
  //   setModals((prevState) => {
  //     return {
  //       ...prevState,
  //       deleteGradeLevel: true,
  //     };
  //   });
  // };

  const deleteGradeLevel = () => {
    if (!gradeLevel) return;
    const filteredArr = gradeLevels.filter(
      (grade) => grade.id !== gradeLevel.id,
    );
    setGradeLevels(filteredArr);
    setModals((prevState) => {
      return {
        ...prevState,
        deleteGradeLevel: false,
      };
    });
    toast.success("Grade level deleted");
    setGradeLevel(undefined);
  };

  const assignGradeLevel = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selEmployeeId || selEmployeeId === "") return;
    if (!gradeLevel) return;
    const updatedEmployeesList = employees.map((staff) =>
      staff.id === selEmployeeId
        ? {
            ...staff,
            grade: gradeLevel.name,
          }
        : staff,
    );
    setEmployees(updatedEmployeesList);
    toast.success("Employee assigned to grade level");
    setModals((prevState) => {
      return {
        ...prevState,
        assignEmployee: false,
      };
    });
    setGradeLevel(undefined);
    setSelEmployeeId(undefined);
  };

  return (
    <section className="space-y-5 lg:space-y-7 lg:px-5 lg:py-4">
      {/* section heading */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <SectionHeader
          heading="grade levels"
          subHeading="Mid-role assessment grade levels for employees."
        />
        <Button
          onClickFunction={() =>
            setModals((prevState) => {
              return {
                ...prevState,
                createGradeLevel: true,
              };
            })
          }
          btnText="create grade level"
          IconName={HiOutlinePlus}
        />
      </div>{" "}
      {/* body content */}
      {gradeLevels.length === 0 ? (
        // empty list notification
        <EmptySet text="No grade levels yet. Create one to start categorizing employees." />
      ) : (
        // grade level list
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {gradeLevels.map((grade, index) => {
            return (
              <GradeLevelCard
                key={index}
                name={grade.name}
                description={grade.description}
                handleDeleteBtnClick={() => {
                  setGradeLevel(grade);
                  setModals((prevState) => {
                    return {
                      ...prevState,
                      deleteGradeLevel: true,
                    };
                  });
                }}
                handleAssignEmployeeBtnClick={() => {
                  setGradeLevel(grade);
                  setModals((prevState) => {
                    return {
                      ...prevState,
                      assignEmployee: true,
                    };
                  });
                }}
              />
            );
          })}
        </div>
      )}
      {modals.createGradeLevel && (
        <CreateGradeLevel
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setModals={setModals}
          gradeLevelForm={gradeLevelForm}
        />
      )}
      {modals.deleteGradeLevel && (
        <DeleteConfirmation
          title="Delete Grade Level"
          desc={`Delete ${gradeLevel?.name}? Employees in this grade will become unassigned.`}
          setModals={setModals}
          deleteGradeLevel={deleteGradeLevel}
          setGradeLevel={setGradeLevel}
        />
      )}
      {modals.assignEmployee && (
        <GradeLevelAssign
          setModals={setModals}
          setGradeLevel={setGradeLevel}
          gradeLevel={gradeLevel}
          setSelEmployeeId={setSelEmployeeId}
          assignGradeLevel={assignGradeLevel}
        />
      )}
    </section>
  );
}
