import { NextFunction, Request, Response } from "express";
import pool from "../dbconfig/config";
import { QueryResult, QueryResultRow } from "pg";

class Checker {
  async duplicate(req: Request, res: Response, next:NextFunction) {
        const {activity} = req.body;
      const data: QueryResult = await  pool.query({
        text: "SELECT * from progressboard where activity = $1",
        values: [activity],
      });
      if (data.rows.length > 0) {
        return res.status(409).json({
          message: "data already exists",
        });
      }
      next();
  }
  async findData(req: Request, res: Response, next:NextFunction){
    const id = req.params.id;
    const data: QueryResult = await  pool.query({
      text: "SELECT * from progressboard where id = $1",
      values: [id],
    });
    if (data.rows.length == 0) {
      return res.status(404).json({
        message: "data not found",
      });
    }
    next();
  }
}

export default new Checker();
