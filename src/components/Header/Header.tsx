import './Header.css';

export function Header() {
    return (
        <>
            <div>
                <img
                    className="banner"
                    src="https://i.pinimg.com/564x/31/0d/1c/310d1c970338d73748c926231b609a34.jpg"
                    alt="banner" />
            </div>
            <div className="text-center">
                <img
                    className="avatar"
                    src="https://i.pinimg.com/564x/6a/86/0f/6a860f4d5e456ec5c0ee814966ee7695.jpg"
                    alt="avatar" />
            </div>
        </>
    );
}