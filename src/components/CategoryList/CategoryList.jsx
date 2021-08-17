export default function CategoryList({ handleCheckbox, setShowCategory, handleSubmit }) {
    return (
        <div>
            <h2>Pick Categories That You're Interested In</h2>
            <form onChange={handleCheckbox} onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" value="Animals" name="Animals" />
                    Animals
                </label>
                <label>
                    <input type="checkbox" value="Beauty" name="Beauty" />
                    Beauty
                </label>
                <label>
                    <input type="checkbox" value="Cars" name="Cars" />
                    Cars
                </label>
                <label>
                    <input type="checkbox" value="Cooking" name="Cooking" />
                    Cooking
                </label>
                <label>
                    <input type="checkbox" value="Dance" name="Dance" />
                    Dance
                </label>
                <label>
                    <input type="checkbox" value="Fashion" name="Fashion" />
                    Fashion
                </label>
                <label>
                    <input type="checkbox" value="Fitness" name="Fitness" />
                    Fitness
                </label>
                <label>
                    <input type="checkbox" value="Funny" name="Funny" />
                    Funny
                </label>
                <label>
                    <input type="checkbox" value="Gaming" name="Gaming" />
                    Gaming
                </label>
                <label>
                    <input type="checkbox" value="Goofy" name="Goofy" />
                    Goofy
                </label>
                <label>
                    <input type="checkbox" value="Music" name="Music" />
                    Music
                </label>
                <label>
                    <input type="checkbox" value="Pranks" name="Pranks" />
                    Pranks
                </label>
                <label>
                    <input type="checkbox" value="Sports" name="Sports" />
                    Sports
                </label>
                <label>
                    <input type="checkbox" value="Other" name="Other" />
                    Other
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}