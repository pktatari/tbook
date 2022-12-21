import "./index.css";
import manga0 from "./assets/jujutsu-kaisen.jpg";
const BookDetails = () => {
  return (
    <div className="details">
      <img
        src={manga0}
        alt="manga"
        style={{ width: "90px", height: "160px" }}
      />
      <p> Author: Gege Akutami</p>
      <p>
        Suspendisse vitae tempus diam. Cras iaculis, augue at eleifend luctus,
        ipsum dolor tristique mauris, tempus ornare enim tortor nec ante. Ut
        sodales, metus vitae efficitur aliquet, lorem eros sollicitudin nisl, at
        faucibus ipsum nisi non tellus. Quisque venenatis facilisis consequat.
        Cras ultrices eleifend ligula vel fringilla. Donec in urna sit amet
        mauris facilisis ullamcorper vel ultricies enim. Pellentesque in
        placerat nulla, ac consequat ante. Nam nec dui nulla. Quisque sed urna
        ut tortor vulputate eleifend. Sed mi sem, euismod vitae risus in,
        accumsan suscipit elit. Duis mollis ultricies ex, sit amet gravida ante
        egestas vitae. Vivamus molestie in nisi vitae placerat. Integer suscipit
        molestie lacus id viverra. Cras efficitur est accumsan facilisis
        venenatis. Aliquam viverra efficitur lacus ac convallis. Integer aliquet
        placerat turpis at dignissim. Cras consequat pharetra dignissim.
        Suspendisse potenti. Vivamus non massa lorem. Cras quis tincidunt ante.
        Maecenas lacus dui, rutrum elementum velit id, dictum fringilla ipsum.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et
        ornare lorem. Nunc ultrices lorem nulla, id commodo mi varius a. Donec
        quis laoreet velit, blandit pretium dolor. Maecenas congue diam purus,
        sed laoreet mi congue at. Proin bibendum facilisis enim at ultricies.
        Morbi aliquam arcu nec sodales tincidunt. Nunc malesuada lectus id lorem
        pulvinar lacinia. Nam ut eros nunc. In blandit dignissim consequat.
        Fusce elementum malesuada tincidunt. Nullam tincidunt, sapien sed
        faucibus imperdiet, ipsum elit bibendum orci, sed semper quam leo sit
        amet neque. Nunc lobortis augue ac enim tincidunt, eget faucibus mauris
        hendrerit. Nullam aliquet lectus dui, sed laoreet sapien vestibulum sit
        amet. Curabitur condimentum massa a mattis dignissim. In ac tristique
        felis. Proin a egestas massa. Maecenas posuere justo eu ornare euismod.
      </p>
    </div>
  );
};

export default BookDetails;
