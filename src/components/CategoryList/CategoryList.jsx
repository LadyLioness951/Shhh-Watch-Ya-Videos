export default function CategoryList({ handleCheckbox, setShowCategory }) {
    return (
        <div>
            <h2>Pick Categories That You're Interested In</h2>
            <form>
                <label>
                    <input type="checkbox" value="Animals" />
                    Animals
                </label>
                <label>
                    <input type="checkbox" value="Beauty" />
                    Beauty
                </label>
                <label>
                    <input type="checkbox" value="Cars" />
                    Cars
                </label>
                <label>
                    <input type="checkbox" value="Cooking" />
                    Cooking
                </label>
                <label>
                    <input type="checkbox" value="Dance" />
                    Dance
                </label>
                <label>
                    <input type="checkbox" value="Fashion" />
                    Fashion
                </label>
                <label>
                    <input type="checkbox" value="Fitness" />
                    Fitness
                </label>
                <label>
                    <input type="checkbox" value="Funny" />
                    Funny
                </label>
                <label>
                    <input type="checkbox" value="Gaming" />
                    Gaming
                </label>
                <label>
                    <input type="checkbox" value="Goofy" />
                    Goofy
                </label>
                <label>
                    <input type="checkbox" value="Pranks" />
                    Pranks
                </label>
                <label>
                    <input type="checkbox" value="Sports" />
                    Sports
                </label>
                <label>
                    <input type="checkbox" value="Other" />
                    Other
                </label>
                <br />
            </form>
            <button onClick={() => setShowCategory(false)}>Submit</button>
        </div>
    );
}