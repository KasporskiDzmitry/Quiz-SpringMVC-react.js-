package by.dz.quiz.dao.impl;

import by.dz.quiz.dao.QuizDAO;
import by.dz.quiz.entity.Player;
import by.dz.quiz.entity.Question;
import by.dz.quiz.entity.Topic;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Component
@Repository()
@Transactional
public class QuizDAOImpl implements QuizDAO {

    @Resource(name = "sessionFactory")
    private SessionFactory sessionFactory;

    @Override
    public List<Topic> getTopics() {
        Query query = sessionFactory.getCurrentSession().createQuery("FROM topics").setMaxResults(5);
        return query.getResultList();
    }

    @Override
    public Question getQuestion(int topicId, int value) {
        Query query = sessionFactory.getCurrentSession().createQuery("FROM question WHERE value = :value AND id_topic = :id");
        query.setParameter("value", value);
        query.setParameter("id", topicId);
        return (Question) query.getResultList().get(0);
    }

    @Override
    public void saveResult(Player winner) {
        sessionFactory.getCurrentSession().save(winner);
    }

    @Override
    public List<Player> getAllResults() {
        Query query = sessionFactory.getCurrentSession().createQuery("FROM players ORDER BY score DESC");
        query.setMaxResults(20);
        return query.getResultList();
    }
}
