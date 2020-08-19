package by.dz.quiz.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by User on 28.08.2019.
 */

@Entity()
@Table(name = "topics")
public class Topic {

    @Id
    @Column(name = "id_topic")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "topic")
    private String topic;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "topic")
    @JsonIgnore
    private List<Question> questions;

    public Topic() {}

    public Topic(int id, String topic, List<Question> questions) {
        this.id = id;
        this.topic = topic;
        this.questions = questions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Topic topic1 = (Topic) o;

        if (id != topic1.id) return false;
        if (!topic.equals(topic1.topic)) return false;
        return questions.equals(topic1.questions);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + topic.hashCode();
        result = 31 * result + questions.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", topic='" + topic + '\'' +
                '}';
    }
}
