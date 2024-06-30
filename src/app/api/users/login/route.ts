import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = request.json();
    const { email, password } = await reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });

    // check if the user exists
    if (!user) {
      return NextResponse.json(
        { error: "Usuário não existe" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    // check if password is correct
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //  create token

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  } finally {
  }
}
