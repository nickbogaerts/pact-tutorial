import { Request, Response } from 'express';
import { isUndefined } from 'lodash';

const isOdd = (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');

  const { input } = req.params;
  if (isUndefined(input)) {
    return res.send({
      status: 400,
      input: input,
      error: 'No input was provided'
    });
  }

  const parsed = Number.parseFloat(input);

  if (Number.isNaN(parsed)) {
    return res.send({
      status: 400,
      input: input,
      error: 'Input is not a number'
    });
  }

  if (!Number.isInteger(parsed)) {
    return res.send({
      status: 400,
      input: input,
      error: 'This service only supports integers'
    });
  }

  return res.send({
    status: 200,
    input: input,
    odd: parsed % 2 === 1
  });
};

export default isOdd;
