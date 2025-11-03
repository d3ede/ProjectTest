## Süsteeminõuded
- Node.js v18+
- npm v9+
- Soovitatav: Windows 10/11 või Linux Ubuntu 22.04

## Paigaldamine ja käivitamine

```bash
git clone <repo-url>
cd project
npm install
```

## Üksusetestide käivitamine

```bash
npm test
```

## Katvuse kontroll

```bash
npm run coverage
```

## Keskkonnamuutujate näidis

Fail `.env.example`

```env
MODE=dev
PORT=3000
```

---

## 🧩 Testiplaan (lühiülevaade)

Testid kontrollivad kolme JavaScript-moodulit:

1. **calculatorScript.js** — arvutuste funktsioonid (liitmine,
lahutamine, viga nulliga jagamisel).
2. **lippScript.js** — lipu värvide valimise funktsioon (tagastab
õiged värvid või tühja massiivi).
3. **KusimusScripts.js** — küsimustiku funktsioonid (vastuse kontroll,
tühja sisendi käsitlemine).

**Eesmärk:**
Veenduda, et iga moodul töötab ootuspäraselt nii tavalistes kui ka
äärmuslikes olukordades.

**Stsenaariumid:**
- Algseis: sisendandmed olemas või tühjad.
- Tegevus: kutsutakse funktsioon.
- Ootus: funktsioon tagastab õige tulemuse või annab veateate.

moreveal, [03.11.2025 10:56]
js/calculatorScript.js
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new
Error('Invalid input');
  return a + b;
}

export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

export function subtract(a, b) {
  return a - b;
}
