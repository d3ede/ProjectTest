<?php
echo '<h1>Simple PHP Calculator</h1>';
?>
<table id="bank">
    <tr>
        <td><div id="currencyA">Currency A = 56</div></td>
        <td><div id="currencyB">Currency B = 3</div></td>
    </tr>
</table>
<h2>Choose the currency and convert the money</h2>
<table>
    <tr>
        <td><label for="inputValue">Enter the number</label></td>
        <td><input type="number" id="inputValue" step="0.01"></td>
        <td>
            <select name="currency" id="currencyType">
                <option value="currencyA">Currency A</option>
                <option value="currencyB">Currency B</option>
            </select>
        </td>
        <td><input type="button" id="convertButton" value="Convert currency" onclick="convertCurrency()"></td>
    </tr>
    <tr>
        <td colspan="4"><div id="answer"></div></td>
    </tr>
</table>
