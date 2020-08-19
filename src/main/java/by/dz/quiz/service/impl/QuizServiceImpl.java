package by.dz.quiz.service.impl;

import by.dz.quiz.dao.QuizDAO;
import by.dz.quiz.entity.Player;
import by.dz.quiz.entity.Question;
import by.dz.quiz.entity.Topic;
import by.dz.quiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("quizService")
public class QuizServiceImpl implements QuizService {

    @Autowired
    QuizDAO quizDAO;

    @Override
    public List<Topic> getTopics()  {
        return quizDAO.getTopics();
    }

    @Override
    public Question getQuestion(int topicId, int value) {
        return quizDAO.getQuestion(topicId, value);
    }

    @Override
    public void saveResult(Player winner) {
        quizDAO.saveResult(winner);
    }

    @Override
    public List<Player> getAllResults() {
        return quizDAO.getAllResults();
    }
}
