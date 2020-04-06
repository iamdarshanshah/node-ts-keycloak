import { RequestHandler } from 'express';

export const getResponse: RequestHandler = (req, res) => {
    res.send(
        {
            message : "Done!!"
        }
    );
  };