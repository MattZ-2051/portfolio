import PortfolioLayout from "@/components/PortfolioLayout";
import ResumePDF from "@/assets/Matthew_Zamora_Resume_2026.pdf";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const RESUME_FILENAME = "Matthew_Zamora_Resume_2026.pdf";

const Resume = () => {
  return (
    <PortfolioLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <h1 className="text-3xl font-bold">Resume</h1>
            <Button asChild>
              <a href={ResumePDF} download={RESUME_FILENAME}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="w-full max-w-4xl">
            <object
              data={`${ResumePDF}#view=FitH`}
              type="application/pdf"
              aria-label="Resume of Matthew Zamora"
              className="h-[80vh] min-h-[600px] w-full rounded-lg border border-gray-200 shadow-2xl"
            >
              <p className="p-6 text-center text-muted-foreground">
                Your browser can't display the PDF preview.{" "}
                <a
                  href={ResumePDF}
                  download={RESUME_FILENAME}
                  className="underline"
                >
                  Download the resume
                </a>{" "}
                instead.
              </p>
            </object>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Resume;
