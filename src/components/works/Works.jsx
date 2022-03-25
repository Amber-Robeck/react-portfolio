import "./works.scss"
import Card from "../card/Card"



export default function Works() {
    const projects = [
        {
            title: "My first Project",
            description: "this was the first project I made",
            website: "www.google.com"
        },
        {
            title: "My second project",
            description: "this is second one I made",
            website: "www.google.com"
        },
        {
            title: "My  Project",
            description: "this was the first project I made",
            website: "www.google.com"
        },
        {
            title: " Project",
            description: "this was the first project I maddddddddd ddddd dddss  ddddddddd  dde",
            website: "www.google.com"
        },
        {
            title: "Myect",
            description: "this was the first project I made salkdf j;asl;jd fpoaienonkk   sldkdie  ",
            website: "www.google.com"
        }
    ]
    return (
        <div className="works" id="works">
            <h2 className="head-text">My Favorite Projects</h2>
            <div className="projects">

                <Card projects={projects}></Card>
            </div>

        </div>
    )
}
