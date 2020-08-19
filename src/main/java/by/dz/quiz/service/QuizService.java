package by.dz.quiz.service;

import by.dz.quiz.entity.Player;
import by.dz.quiz.entity.Question;
import by.dz.quiz.entity.Topic;

import java.util.List;

/**
 * Created by User on 17.09.2018.
 */
public interface QuizService {

    List<Topic> getTopics();

    Question getQuestion(int topicId, int value);

    void saveResult(Player winner);

    List<Player> getAllResults();


}
