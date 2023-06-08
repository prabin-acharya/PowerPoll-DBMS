import { getUser } from "../../../lib/getUser";
import { prisma } from "../../../lib/prisma";

export default async (req, res) => {
  let { question, showResults, thanksMessage, themeColor, answers, enable } =
    req.body;

  const user = await getUser(req, res);

  if (req.method === "POST") {
    if (!user) return res.status(401).json({ message: "Unauthenticated" });

    question = question.trim();

    if (!question.length)
      return res.status(422).json({ message: "Add a question!" });

    if (!answers.length)
      return res.status(422).json({ message: "Add an answer!" });

    const poll = await prisma.poll.create({
      data: {
        question,
        thanksMessage,
        showResults,
        themeColor,
        enable,
        answers: {
          create: answers,
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const pollData = [
      question,
      thanksMessage,
      showResults,
      themeColor,
      enable,
      user.id,
    ];

    const answerData = answers.map((answer) => [answer]);

    res.status(201).json(poll);
  } else {
    res.status(424).json({ message: "Invalid method!" });
  }
};
