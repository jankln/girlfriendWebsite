# Projekt: Romantische Jahrestags-Website
 
## Übersicht
Eine persönliche, ästhetische Website als Geschenk für die Freundin. Der Fokus liegt auf Stimmung, Animationen und Interaktion, ohne die Verwendung von Fotos.
 
## Ästhetik & Design
*   **Stimmung:** Sanft, intim, verspielt, romantisch.
*   **Farbpalette:**
    *   Hintergrund: Zartes Rosa (#FDEEF8) oder Creme (#FFF6EE).
    *   Akzente: Gold (#F6C48B), Tiefes Burgund (#6A1B4D) für Text/Kontraste.
    *   Elemente: Pfirsich (#FFD6C2), Lavendel (#EAE6FF).
*   **Typografie:**
    *   Überschriften: Elegante Serif oder Handschrift (z.B. 'Playfair Display', 'Dancing Script').
    *   Fließtext: Saubere Sans-Serif (z.B. 'Inter', 'Montserrat').
*   **Visuelle Sprache:** Vektor-Illustrationen (SVG), feine Linien, Partikel-Effekte, weiche Verläufe (Gradients).
 
## Kern-Features
 
### 1. Jahrestags-Countdown
*   **Funktion:** Zählt die Zeit seit dem Jahrestag (oder bis zum nächsten) in Jahren, Tagen, Stunden, Minuten, Sekunden.
*   **Design:** Minimalistisch, elegante Zahlen, vielleicht schwebend oder sanft pulsierend.
*   **Animation:** Sanftes Einblenden beim Laden.
 
### 2. Das "Lebendige" Herz
*   **Konzept:** Ein zentrales, künstlerisches Herz-Element (SVG/Canvas).
*   **Animation:**
    *   "Atmet" (sanftes Skalieren).
    *   Reagiert auf Mausbewegung (Parallax oder leichtes Neigen).
    *   Partikel-Effekt: Sendet gelegentlich kleine Funken oder Mini-Herzen aus.
*   **Platzierung:** Zentral im Hero-Bereich oder als fixierter Hintergrund-Akzent.
 
### 3. Interaktives Mini-Spiel ("Love Clicker")
*   **Spielmechanik:** Ein einfaches Klick-Spiel. Der Nutzer klickt auf bestimmte Elemente (z.B. Sterne, Blüten, abstrakte Formen).
*   **Belohnung:**
    *   Jeder Klick löst eine befriedigende Animation aus (Explosion von Farben, Konfetti, Wellen).
    *   Nach einer bestimmten Anzahl von Klicks erscheint eine liebevolle Textnachricht oder ein Zitat.
*   **Ziel:** Entspannung und Freude an der visuellen Reaktion.
 
## Technische Anforderungen
*   **Framework:** React (oder Vanilla JS/HTML/CSS für Einfachheit).
*   **Animationen:** CSS Keyframes, Framer Motion (für React) oder GSAP.
*   **Responsivität:** Muss auf dem Smartphone (Mobile First) perfekt aussehen.
*   **Datenschutz:** Keine externen Tracker, keine Cookies notwendig.
 
## Nächste Schritte
1.  Projektstruktur aufsetzen.
2.  Farbpalette und Schriftarten in CSS-Variablen definieren.
3.  Komponente für das animierte Herz erstellen.
4.  Countdown-Logik implementieren.
5.  Mini-Spiel Logik entwickeln.