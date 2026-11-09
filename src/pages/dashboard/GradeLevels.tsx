import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import EmptySet from "../../components/ui/EmptySet";
import CreateGradeLevel from "../../components/modals/grade-levels-page/CreateGradeLevel";
import GradeLevelAssign from "../../components/modals/grade-levels-page/GradeLevelAssign";
import GradeLevelCard from "../../components/ui/GradeLevelCard";
import type {
  Employee,
  GradeLevel,
  GradeLevelForm,
  GradeLevelsModals,
} from "../../types";
import { toast } from "sonner";
import DeleteConfirmation from "../../components/modals/grade-levels-page/DeleteConfirmation";
import type { ApiError } from "../../lib/api";
import {
  assignEmployee,
  createGradeLevel,
  deleteGradeLevel,
  getGradeLevels,
} from "../../api/grade-levels";
import { getEmployees } from "../../api/employees";
import ErrorWrapper from "../../components/ui/error-wrapper";
import LoadingWrapper from "../../components/ui/loading-wrapper";

interface EmployeeHandler {
  data: Employee[] | null;
  isLoading: boolean;
  isError: string | null;
}

export interface GradeLevelHandler {
  data: GradeLevel[] | null;
  isLoading: boolean;
  isError: string | null;
}

interface Loaders {
  isCreatingGL: boolean;
  isAddingStaff: boolean;
  isDeletingGL: boolean;
}

export default function GradeLevels() {
  const [modals, setModals] = useState<GradeLevelsModals>({
    assignEmployee: false,
    createGradeLevel: false,
    deleteGradeLevel: false,
  });
  const [gradeLevelForm, setGradeLevelForm] = useState<GradeLevelForm>({
    name: "",
    description: "",
  });
  const [employees, setEmployees] = useState<EmployeeHandler>({
    data: null,
    isError: null,
    isLoading: true,
  });
  const [gradeLevels, setGradeLevels] = useState<GradeLevelHandler>({
    data: null,
    isError: null,
    isLoading: true,
  });
  const [loaders, setLoaders] = useState<Loaders>({
    isCreatingGL: false,
    isAddingStaff: false,
    isDeletingGL: false,
  });
  const [gradeLevel, setGradeLevel] = useState<GradeLevel | null>(null);
  const [selEmployeeId, setSelEmployeeId] = useState<string | null>(null);

  const fetchEmployees = async () => {
    await getEmployees()
      .then((res) => {
        setEmployees((prev) => ({ ...prev, data: res.data }));
      })
      .catch((error: ApiError) =>
        setEmployees((prev) => ({ ...prev, isError: error.message })),
      )
      .finally(() => setEmployees((prev) => ({ ...prev, isLoading: false })));
  };

  const fetchGradeLevels = async () => {
    if (!gradeLevels.isLoading)
      setGradeLevels((prev) => ({ ...prev, isLoading: true }));
    await getGradeLevels()
      .then((res) => {
        setGradeLevels((prev) => ({ ...prev, data: res.data }));
      })
      .catch((error: ApiError) =>
        setGradeLevels((prev) => ({ ...prev, isError: error.message })),
      )
      .finally(() => setGradeLevels((prev) => ({ ...prev, isLoading: false })));
  };

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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoaders((prev) => ({ ...prev, isCreatingGL: true }));
    const { name, description } = gradeLevelForm;
    try {
      const res = await createGradeLevel(name, description);
      //notify
      toast.success(
        res.message ? res.message : "Grade level created successfully",
      );
      //close
      setModals((prevState) => ({ ...prevState, createGradeLevel: false }));
      //reset
      setGradeLevelForm({
        name: "",
        description: "",
      });
      fetchGradeLevels();
    } catch (err: any) {
      const error = err as ApiError;
      toast.error(error.message ? error.message : "Failed to execute");
    } finally {
      setLoaders((prev) => ({ ...prev, isCreatingGL: false }));
    }
  };

  const eliminateGradeLevel = async () => {
    if (!gradeLevel) return;
    setLoaders((prev) => ({ ...prev, isDeletingGL: true }));
    try {
      const res = await deleteGradeLevel(gradeLevel.id);
      toast.success(res.message ? res.message : "GL deleted successfully");
      setGradeLevel(null);
      setModals((prevState) => ({ ...prevState, deleteGradeLevel: false }));
      fetchGradeLevels();
    } catch (e: any) {
      const err = e as ApiError;
      toast.error(err.message);
    } finally {
      setLoaders((prev) => ({ ...prev, isDeletingGL: false }));
    }
  };

  const assignGradeLevel = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selEmployeeId?.trim() || !gradeLevel) return;
    setLoaders((prev) => ({ ...prev, isAddingStaff: true }));
    try {
      const res = await assignEmployee(gradeLevel.id, selEmployeeId);
      toast.success(
        res.message ? res.message : "Employee assigned to GL successfully",
      );
      setGradeLevel(null);
      setSelEmployeeId(null);
      fetchGradeLevels();
      setModals((prevState) => ({ ...prevState, assignEmployee: false }));
    } catch (e: any) {
      const error = e as ApiError;
      toast.error(error.message);
    } finally {
      setLoaders((prev) => ({ ...prev, isAddingStaff: false }));
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchGradeLevels();
  }, []);

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
            setModals((prevState) => ({ ...prevState, createGradeLevel: true }))
          }
          btnText="create grade level"
          IconName={HiOutlinePlus}
        />
      </div>{" "}
      {/* body content */}
      {gradeLevels.isLoading ? (
        <LoadingWrapper text="loading Grade Levels..." />
      ) : gradeLevels.isError ? (
        <ErrorWrapper text="Failed to get grade levels" />
      ) : gradeLevels.data?.length === 0 ? (
        // empty list notification
        <EmptySet text="No grade levels yet. Create one to start categorizing employees." />
      ) : (
        // grade level list
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {gradeLevels.data?.map((grade, index) => {
            return (
              <GradeLevelCard
                key={index}
                employees={grade.employees ?? []}
                name={grade.name}
                description={grade.description ?? "No description provided"}
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
      {/* modals */}
      {modals.createGradeLevel && (
        <CreateGradeLevel
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setModals={setModals}
          gradeLevelForm={gradeLevelForm}
          isLoading={loaders.isCreatingGL}
        />
      )}
      {modals.deleteGradeLevel && (
        <DeleteConfirmation
          title="Delete Grade Level"
          desc={`Delete ${gradeLevel?.name}? Employees in this grade will become unassigned.`}
          setModals={setModals}
          deleteGradeLevel={eliminateGradeLevel}
          setGradeLevel={setGradeLevel}
          isLoading={loaders.isDeletingGL}
        />
      )}
      {modals.assignEmployee && (
        <GradeLevelAssign
          setModals={setModals}
          setGradeLevel={setGradeLevel}
          gradeLevel={gradeLevel}
          setSelEmployeeId={setSelEmployeeId}
          assignGradeLevel={assignGradeLevel}
          employees={employees.data ?? []}
          selEmployeeId={selEmployeeId ?? ""}
          isLoading={loaders.isAddingStaff}
        />
      )}
    </section>
  );
}
