import { format, differenceInDays, startOfYesterday } from "date-fns";
import { tr } from "date-fns/locale";

const developerDays = differenceInDays(new Date(), new Date("2024-02-15"));
const yesterday = startOfYesterday();
const today = new Date();

//=> 'Nov'

export const HomePage = () => {
  return (
    <div>
      <h1 className="sayfa-baslik">Home Page</h1>
      <hr />
      <p className="text-lg text-sky-600">
        {developerDays} gündür yazılım geliştiriyorum!
      </p>
      <p className="text-lg text-sky-600">
        {format(yesterday, "d MMMM EEEE, yyyy", { locale: tr })} dündür,{" "}
        {format(new Date(), "MMM")} bugündür!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis atque,
        enim culpa natus necessitatibus eligendi velit deleniti, amet facilis
        ullam iusto maxime officia quo commodi ut, dolor inventore voluptatum.
        Recusandae?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis atque,
        enim culpa natus necessitatibus eligendi velit deleniti, amet facilis
        ullam iusto maxime officia quo commodi ut, dolor inventore voluptatum.
        Recusandae?
      </p>
    </div>
  );
};
