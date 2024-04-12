import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../constants/mockGeoFeatures.js";
import { mockGeographyData } from "../../constants/countries";

const Map = () => (
    <div className="flex-col h-full p-4">
        <div className="mb-8">
            <h2 className=" font-bold text-lg">
                Bond Holdings Based on Countries
            </h2>
            <p>
                The map below shows the distribution of bond holdings based on
                countries. Hover over a country to see the bond holding amount.
            </p>
        </div>
        <div className="h-[500px]">
            <ResponsiveChoropleth
                features={geoFeatures.features}
                data={mockGeographyData}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                projectionTranslation={[0.45, 0.5]}
                projectionRotation={[0, 0, 0]}
                fillColor="#555"
                borderWidth={1}
                enableGraticule={true}
                graticuleLineWidth={0}
                graticuleLineColor="#dddddd"
                domain={[0, 700000]}
            />
        </div>
    </div>
);

export default Map;
