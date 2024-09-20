import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 8000;

const BASE_URL =
    "https://7zszxecwra.execute-api.ap-northeast-2.amazonaws.com/api/";
const AUTH_TOKEN = "5885aca8f187692550fdce72a6b45309";

// CORS 설정
app.use(
    cors({
        origin: "*", // 또는 클라이언트의 URL을 지정
    })
);

// JSON 요청 본문을 파싱하도록 설정
app.use(express.json());

// 정적 파일 서빙
app.use(express.static("public"));

// 클라이언트에서 호출할 API 엔드포인트
app.post("/api/start", async (req, res) => {
    try {
        console.log("req.body", req.body);
        const response = await fetch(`${BASE_URL}/start`, {
            method: "POST",
            headers: {
                "X-Auth-Token": AUTH_TOKEN,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        });
        if (!response.ok) {
            // 403 Forbidden 오류 처리
            if (response.status === 403) {
                console.error("Forbidden: Access is denied.");
                return res
                    .status(403)
                    .json({ error: "Forbidden: Access is denied." });
            } else {
                console.log(`HTTP error! Status: ${response.statusText}`);
                console.log(`HTTP error! Status: ${await response.text()}`);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }

        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
