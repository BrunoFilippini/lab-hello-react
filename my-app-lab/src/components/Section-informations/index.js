import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import './index.css'

function Section() {
    return (
  <section>

    <div className = "cards">
      <img src={icon1}  alt="Declarative Icon" />
      
      <h3>
        Declarative
      </h3>

      <p className="test" >
        React makes it painless to create interactive UIs.
      </p>
    </div>

    <div className = "cards">
      <img src={icon2}  alt="Components Icon" />
      
      <h3>
        Components
      </h3>

      <p>
        Build encapsulated components that manage their state
      </p>
    </div>

    <div className = "cards">
      <img src={icon3}  alt="Single-Way Icon" />
      
      <h3>
        Single-Way
      </h3>

      <p>
        A set of immutable values are passed to the compnent's
      </p>
    </div>
    
    <div className = "cards">
      <img src={icon4}  alt="JSX Icon" />
      
      <h3>
        JSX
      </h3>

      <p>
        Statically-typed, designed to run on modern browers.
      </p>
    </div>

  </section>

    );
}

export {Section}
