export interface AuthResponse{
  status?: boolean,
  uid?: string,
  nombre?: string,
  email?: string,
  token?: string,
  msg?: string,
}

export interface Usuario{
  uid: string;
  nombre: string;
  email: string;
}