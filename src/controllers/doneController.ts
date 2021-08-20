import { Request, Response } from "express";
import pool from "../dbconfig/config";
import { QueryResult} from "pg";

class ToDoController {
  async get(req: Request, res: Response) {
    try {
      const response: QueryResult = await pool.query(
        `SELECT * FROM progressboard where done = true`
      );
      return res.status(200).json({
        dataCount: response.rowCount,
        data: response.rows,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Sever Error",
      });
    }
  }
  async add(req: Request, res: Response) {
    try {
      const { activity } = req.body;
      await pool.query({
        text: "INSERT INTO progressboard (activity,todo,onprogress,done) VALUES($1,true,false,false)",
        values: [activity],
      });
      const find: QueryResult = await pool.query({
        text: "SELECT * from progressboard where activity = $1",
        values: [activity],
      });
      return res.status(201).json({
        message: "Success",
        data: find.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  async updateToOnProgress(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const response: QueryResult = await pool.query({
        text: "UPDATE progressboard SET todo = false, onprogress = true, done = false where id = $1",
        values: [id],
      });
      const find: QueryResult = await pool.query({
        text: "SELECT * from progressboard where id = $1",
        values: [id],
      });
      return res.status(202).json({
        message: "success",
        data: find.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  async updateToTodo(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const response: QueryResult = await pool.query({
        text: "UPDATE progressboard SET todo = true, onprogress = false, done = false where id = $1",
        values: [id],
      });
      const find: QueryResult = await pool.query({
        text: "SELECT * from progressboard where id = $1",
        values: [id],
      });
      return res.status(202).json({
        message: "success",
        data: find.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  async deleteData(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const response: QueryResult = await pool.query({
        text: "DELETE FROM progressboard WHERE id = $1",
        values: [id],
      });
      return res.status(202).json({
        message: "deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
}

export default new ToDoController();
