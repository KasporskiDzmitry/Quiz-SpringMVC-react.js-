package by.dz.quiz.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by User on 14.09.2018.
 */

@Entity()
@Table(name = "quiz.questions")
public class Question {

    @Id
    @Column(name = "id_question")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "value")
    private int value;

    @Column(name = "question")
    private String text;

    @Column(name = "answer")
    private String answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_topic")
    @JsonIgnore
    private Topic topic;

    public Question() {
    }

    public Question(int id, Topic topic, byte value, String text, String answer) {
        this.id = id;
        this.topic = topic;
        this.value = value;
        this.text = text;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Question question = (Question) o;

        if (id != question.id) return false;
        if (value != question.value) return false;
        if (!text.equals(question.text)) return false;
        if (!answer.equals(question.answer)) return false;
        return topic.equals(question.topic);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + value;
        result = 31 * result + text.hashCode();
        result = 31 * result + answer.hashCode();
        result = 31 * result + topic.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", value=" + value +
                ", text='" + text + '\'' +
                ", answer='" + answer + '\'' +
                ", topic=" + topic +
                '}';
    }
}
