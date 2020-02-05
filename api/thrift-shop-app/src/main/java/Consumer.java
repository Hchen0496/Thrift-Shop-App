import org.graalvm.compiler.lir.CompositeValue.Component;
import lombok.Data;

@Data
@Entity
public class consumers {
    private @Id @GeneratedValue long id;
    private String cName;
    private int cAge;
    private int cYear;

    private consumers() {
    }

    public consumers(String cName, int cAge, int cYear) {
        this.cName = cName;
        this.cAge = cAge;
        this.cYear = cYear;
    }
}

@Component
public class DatabaseLoader implements CommandLineRunner{
    private final 
}
