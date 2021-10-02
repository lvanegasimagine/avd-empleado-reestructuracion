export interface AuthResponse{
  status?: boolean,
  uid?: string,
  nombre?: string,
  email?: string,
  password?: string,
  direccion?: string,
  departamento?: string,
  celular?: string,
  isAdmin?: string,
  token?: string,
  msg?: string,
}

export interface Usuario{
  uid: string;
  nombre: string;
  email: string;
}