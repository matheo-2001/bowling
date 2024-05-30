package tests

import io.gatling.javaapi.core.CoreDsl.*
import io.gatling.javaapi.http.HttpDsl.*

abstract class BowlingTest : Simulation() {

    val httpProtocol = http.baseUrl("http://localhost:3000") // Replace with your actual base URL
        .acceptHeader("application/json")
        .contentTypeHeader("application/json")

    fun postBowlingScore(frames: List<Int>) = exec(
        http("Post Bowling Score")
            .post("/bowling-score/")
            .header("Content-Type", "application/json")
            .body(StringBody(frames.toString()))
            .check(status().is(200))
    )
}
