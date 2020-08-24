package by.dz.quiz.entity;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by User on 14.09.2018.
 */

@Entity()
@Table(name = "quiz.players")
public class Player {

    @Id
    @Column(name = "id_player")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "score")
    private int score;

    @Column(name = "datetime")
    private String datetime;

    public Player() {
    }

    public Player(String name, int score) {
        this.name = name;
        this.score = score;

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-YYYY kk:mm");
        this.datetime = simpleDateFormat.format(new Date());
    }

    public Player(int id, String name, int score, String datetime) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.datetime = datetime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Player player = (Player) o;

        if (id != player.id) return false;
        if (score != player.score) return false;
        if (!name.equals(player.name)) return false;
        return datetime.equals(player.datetime);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + name.hashCode();
        result = 31 * result + score;
        result = 31 * result + datetime.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", score=" + score +
                ", datetime=" + datetime +
                '}';
    }
}
