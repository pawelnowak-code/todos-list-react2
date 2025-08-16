import "./style.css";

const Container = (props) => (
    <main class="container">
        {props.children}
    </main>
);

export default Container;