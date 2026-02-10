import PortfolioLayout from "@/components/PortfolioLayout";
import ResumePDF from "@/assets/Resume_Matthew_Zamora.pdf";
import ResumeImg from "@/assets/Resume-img.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <PortfolioLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <h1 className="text-3xl font-bold">Resume</h1>
            <Button asChild>
              <a href={ResumePDF} download="Resume_Matthew_Zamora.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="w-full max-w-4xl">
            <img
              src={ResumeImg}
              alt="Resume of Matthew Zamora"
              className="w-full h-auto rounded-lg shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Resume;
