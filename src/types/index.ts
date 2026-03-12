export type LoginForm = {
  employeeId: string | number;
  password: string;
};

export type SignupForm = {
  firstname: string;
  lastname: string;
  employeeId: string | number;
  email: string;
  mda: string;
  cadre: string;
  password: string;
  confirmpassword: string;
};

export type FakeUserType = {
  employeeId: string;
  password: string;
  role: "user" | "admin";
};

export interface MdaOps {
  value: string;
  label: string;
}

export type FakeAttendance = {
  name: string;
  id: string;
  time: string;
  status: string;
};

export type StaffCred = {
  name: string;
  id: string;
};

export interface LeaveDates {
  startDate: string;
  endDate: string;
}

export type Holiday = {
  title: string;
  date: string;
  recurring: boolean;
};
