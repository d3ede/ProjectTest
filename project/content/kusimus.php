<form action="" name="lasteKys">
    <table>
        <tr>
            <td>
                <label for="nimi">Sisesta nimi:</label>
            </td>
            <td>
                <input type="text" id="nimi" name="nimi" placeholder="Eesnimi">
            </td>
            <td>
                <div id="name"></div>
            </td>
        </tr>
        <tr>
            <td>
                <label for="vanus">Vanus</label>
            </td>
            <td>
                <input type="number" id="vanus" name="vanus" min="3" max="15" step="1">
            </td>
            <td>
                <div id="age"></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <fieldset>
                    <legend>Vali oma sugu:</legend>
                    <input type="radio" id="boy" name="sugu" value="boy">
                    <label for="boy">Poiss</label>
                    <br>
                    <input type="radio" id="girl" name="sugu" value="girl">
                    <label for="girl">Tüdruk</label>
                    <br>
                    <input type="button" value="OK" onclick="radioButton()">
                </fieldset>
            </td>
            <td>
                <div id="gender"></div>
            </td>
        </tr>
        <tr>
            <td>
                Mis lapsele meeldib?
            </td>
            <td>
                <input type="checkbox" id="coca" name="meeldib" value="Coca-Cola" checked>
                <label for="coca">Coca-Cola</label>
                <br>
                <input type="checkbox" id="kala" name="meeldib" value="Väike kala">
                <label for="kala">Väike kala</label>
                <br>
                <input type="checkbox" id="pepsi" name="meeldib" value="Pepsi">
                <label for="pepsi">Pepsi</label>
                <br>
                <input type="checkbox" id="fanta" name="meeldib" value="Fanta">
                <label for="fanta">Fanta</label>
                <br>
                <input type="checkbox" id="lemon" name="meeldib" value="Väike lemon">
                <label for="lemon">Väike lemon</label>
            </td>
            <td>

            </td>
        </tr>
        <tr>
            <td>
                <label for="kool">Mis tüüpi koolist sa õpid?</label>
            </td>
            <td>
                <select name="kool" id="kool">
                    <option value="">vali...</option>
                    <option value="algkool">algkool</option>
                    <option value="põhikool">põhikool</option>
                    <option value="lasteaed">lasteaed</option>
                    <option value="gümnaasium">gümnaasium</option>
                </select>
            </td>
            <td>
                <div id="school"></div>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" value="Salvesta">
            </td>
            <td>
                <input type="reset" value="Puhasta">
            </td>
            <td>
                <input type="button" value="JavaScript" onclick="showName(), showAge(), showKool()">
            </td>
        </tr>
    </table>
</form>