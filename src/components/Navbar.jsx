

export default function Navbar() {
    return(
        <>
        <div className = 'navBar' >
            <div className = 'logo'>
                <h1><span>be</span>icecream</h1>
            </div>
        <div className = 'lista'>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Our products</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>

        {/* <div className = 'cart'>
                <i class="fas fa-shopping-cart"></i>
        </div> */}
        </div>
        </>
    )
}