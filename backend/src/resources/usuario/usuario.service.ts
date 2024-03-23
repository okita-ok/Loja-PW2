import { PrismaClient, Usuario } from '@prisma/client';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.types';
import { genSalt, hash } from 'bcryptjs';

const prisma = new PrismaClient();

export const listUsuarios = async (): Promise<Usuario[]> => {
  return await prisma.usuario.findMany();
};

export const createUsuario = async (
  usuario: CreateUsuarioDto,
): Promise<Usuario> => {
  const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({
    data: { ...usuario, senha: senha },
  });
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto,
): Promise<Usuario> => {
  const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.update({
    where: { id },
    data: { ...usuario, senha: senha },
  });
};

export const removeUsuario = async (id: string): Promise<Usuario> => {
  return await prisma.usuario.delete({ where: { id } });
};

export const readUsuario = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { id } });
};
