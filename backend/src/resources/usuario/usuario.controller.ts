import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import {
  createUsuario,
  listUsuarios,
  readUsuario,
  removeUsuario,
  updateUsuario,
} from './usuario.service';

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await listUsuarios();
    res.status(StatusCodes.OK).json(usuarios);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const usuario = req.body;
  try {
    const novoUsuario = await createUsuario(usuario);
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await readUsuario(id);
    if (!usuario)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const usuarioAtualizado = await updateUsuario(id, usuario);
    res.status(StatusCodes.OK).json(usuarioAtualizado);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuarioApagado = await removeUsuario(id);
    res.status(StatusCodes.OK).json(usuarioApagado);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
