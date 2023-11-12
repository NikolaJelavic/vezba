import { GoBell } from "react-icons/go";
// import { GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button/Button";
import Accordion from "../components/Button/Accordion";

export default function ButtonPage() {
  const items = [
    {id:1,
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
    {id:2,
      label: "Can I use JS on a project",
      content: "You can use JS on any project you want",
    },
    {id:3,
      label: "Can I use CSS on a project",
      content: "You can use CSS on any project you want",
    },
  ];

  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <div>
        <Button success outline rounded onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          {/* <GoCloudDownload /> */}
          Buy now
        </Button>
      </div>
      <div>
        <Button warning outline>
          {/* <GoDatabase /> */}
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary>Hide Ads</Button>
      </div>
      <div>
        <Button primary>Something</Button>
      </div>
      <div className="m-5 border w-1/3">
        <Accordion items={items} />
      </div>
    </div>
  );
}
