import './Header.css';

export function Header() {
    return (
        <>
            <div>
                <img
                    className="banner"
                    src="https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg"
                    alt="banner" />
            </div>
            <div className="text-center">
                <img
                    className="avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsKhN2hQT05yp8xnMRkT85FEg3H9t7EAqHi0B2VJInA&s"
                    alt="avatar" />
            </div>
        </>
    );
}