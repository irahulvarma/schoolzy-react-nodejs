import Header from "./Common/Header";
import Footer from "./Common/Footer";
import PageContainer from "./PageContainer";

function PageLayout() {

    return (
        <div>
            <Header></Header>
            <PageContainer></PageContainer>
            <Footer></Footer>
        </div>
    );
}

export default PageLayout;