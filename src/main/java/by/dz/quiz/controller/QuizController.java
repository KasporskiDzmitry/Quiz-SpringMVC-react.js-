package by.dz.quiz.controller;

import by.dz.quiz.entity.Player;
import by.dz.quiz.entity.Question;
import by.dz.quiz.entity.Topic;
import by.dz.quiz.service.QuizService;
import org.apache.log4j.lf5.util.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by User on 14.09.2018.
 */

@Controller
public class QuizController {

    @Autowired
    QuizService quizService;

    @GetMapping(value = "/*")
    public String index() { return "index"; }

    @GetMapping(value = "/getTopics")
    @ResponseBody
    public List<Topic> indexPage() {
        return quizService.getTopics();
    }

    @GetMapping(value = "/getQuestion")
    @ResponseBody
    public Question getQuestion(@RequestParam("topicId") int id, @RequestParam("value") int value) {
        return quizService.getQuestion(id, value);
    }

    @PostMapping(value = "/saveResult")
    @ResponseBody
    public void saveResult(@RequestBody Player winner) {
        quizService.saveResult(new Player(winner.getName(), winner.getScore()));
    }

    @GetMapping(value = "/getLeaders")
    @ResponseBody
    public List<Player> getAllResults() {
        return quizService.getAllResults();
    }

    @RequestMapping(value = "/getImage", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(HttpServletResponse response, @RequestParam("id") int id) throws IOException {
        ClassPathResource imgFile = new ClassPathResource("image/" + id + ".jpg");
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
}
