import React from 'react';
import Collapsible from '../Collapsible';

const DIYPage = () => {
    return <>
        <h2>DIY Projects for PPE, Disinfectants, and More</h2>
        <Collapsible className='outerCollapsible' title='Reusable Clorox Wipes' content={<>
            <p><a href='https://chemistrycachet.com/diy-reusable-clorox-wipes/?fbclid=IwAR39DN2gmPdiCMlzE84dZe2Nk_mZrhqDSC81NcIORvlUtdVVfnE9Ba8WG_k'>“Recipe”</a> designed by a chemist</p>
            <p><b>PLEASE NOTE:</b> homemade cleaners do not contain preservatives or buffers, so it is almost impossible to take in to account environment that you breathe and live in, degradation of the objects cleaned, freshness of the air, etc.  </p>
            <p><b>The only way to be sure of disinfecting is to use pure isopropyl alcohol.</b><p>What does this mean? It means you must spray a surface with isopropyl alcohol, then follow up with a homemade cleaner.</p></p>
        </>} />
        <Collapsible className='outerCollapsible' title='Face Masks' content={<>
            <p>Here are some nice resources for making face masks.</p>
            <p>How to pick face mask material found <a href='https://smartairfilters.com/en/blog/best-materials-make-diy-face-mask-virus/?fbclid=IwAR2aSaz5WnRhtvZbPzxE4gms0iJtnw9peUYXUR35pnveMhKKtLdg5W_g0xM'>here</a>.</p>
            <p>Making a face mask sewing pattern <a href='https://www.craftpassion.com/face-mask-sewing-pattern/'>here</a>.</p>
            <p>Create Mask out of an <b>unused</b> HVAC Filter <a href='https://www.youtube.com/watch?v=ofw3AGhvP-0'>here</a>.</p>
        </>} />
        <Collapsible className='outerCollapsible' title='Electrolyte Drinks' content={
            <>
                <p>Basically DIY Gatorade, providing your body those missing electrolytes after a good workout!</p>
                <p>Electrolytes are also an effective way to keep sick people hydrated. </p>
                <p><a href='https://www.drkarafitzgerald.com/recipe/super-hydrating-electrolyte-formula/</p>'>Recipe</a> adapted from WHO’s recommendation. </p>
                <p>Tip: The recipe is basically just salt water. To add flavor, add some <div style={{ color: 'orange', display: 'inline-block' }}>citrus</div>, <div style={{ color: 'purple', display: 'inline-block' }}>berries</div>, or (the most popular) <div style={{ color: 'brown', display: 'inline-block' }}>honey.</div> </p>
            </>
        } />
    </>
}

export default DIYPage;